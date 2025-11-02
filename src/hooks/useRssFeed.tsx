import {flatten} from 'lodash';
import { actions, type Action, type RSS, type State } from '../state';
import type { Dispatch } from 'react';

export async function fetchAndParseRSS(url: string): Promise<RSS[]> {
    const response = await fetch(`https://cors-anywhere.com/${url}`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");

    if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        throw new Error("Failed to parse XML content. Check for valid RSS/XML format.");
    }

    const safeText = (selector: string, context: Element): string => {
        const el = context.querySelector(selector);
        return el?.textContent?.trim() ?? 'No Data';
    };

    const rssItems = xmlDoc.querySelectorAll('channel > item');

    if (rssItems.length > 0) {
        return Array.from(rssItems).map((item: Element): RSS => ({
            title: safeText('title', item),
            link: safeText('link', item)
        }));
    }

    const atomEntries = xmlDoc.querySelectorAll('entry');

    if (atomEntries.length > 0) {
        return Array.from(atomEntries).map((entry: Element): RSS => {
            const linkElement = entry.querySelector('link[rel="alternate"]') || entry.querySelector('link');

            return {
                title: safeText('title', entry),
                link: linkElement?.getAttribute('href') ?? safeText('link', entry) // Prefer 'href' attribute
            };
        });
    }

    // If neither RSS nor Atom format is detected
    return [];
}

export const useRssFeed = ({ state, dispatch}: { state: State, dispatch: Dispatch<Action> }) => {
	const reloadRssFeed = (async () => {
		const answer = await Promise.all(
			state.config.rssFollow.split('/n').map((url: string) => fetchAndParseRSS(url))
		);
		const feeds: RSS[] = flatten(answer);
		dispatch(actions.loadRSSFeedsSuccess({ feeds }))
	})
	return { reloadRssFeed }
}
