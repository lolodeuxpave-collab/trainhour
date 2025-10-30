import styled from 'styled-components';
import type {Article} from '../types/article';
import {accentColor} from '../styles';

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: #0b0c10;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); 
  font-family: "Inter", sans-serif;
  max-width: 600px; 
  margin: 1rem auto; 
`;

export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const TitleLink = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${accentColor}; 
  text-decoration: none;
  margin-right: 1rem;
  
  &:hover {
    text-decoration: underline;
    color: ${accentColor};
  }
`;

export const PubDate = styled.span`
  font-size: 0.8rem;
  color: #c5c6c7;
  white-space: nowrap; 
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #a7a7a7;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  padding-top: 0.5rem;
  border-top: 1px solid #1f2833; 
`;

export const CreatorSource = styled.span`
  color: ${accentColor};
  
  strong {
    font-weight: 600;
    color: #fff;
  }
`;

export const Keywords = styled.span`
  color: ${accentColor};
  font-style: italic;
`;


type NewsArticleProps = {
	article: Article
}

export const NewsArticle = ({ article }: NewsArticleProps) => {
  if (!article) return null;

  // Function to format the date
  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return 'Unknown Date';
    }
  };

  const formattedDate = formatDate(article.pubDate);
  const keywordString = Array.isArray(article.keywords) ? article.keywords.join(', ') : article.keywords;

  return (
    <NewsContainer>
      <NewsHeader>
        <TitleLink href={article.link} target="_blank" rel="noopener noreferrer">
          {article.title}
        </TitleLink>
        <PubDate>{formattedDate}</PubDate>
      </NewsHeader>
      
      <Description>{article.description}</Description>

      <Footer>
        <CreatorSource>
          By: <strong>{article.creator || 'N/A'}</strong> from <strong>{article.source_name || 'N/A'}</strong>
        </CreatorSource>
        <Keywords>Tags: {keywordString || 'none'}</Keywords>
      </Footer>
    </NewsContainer>
  );
};
