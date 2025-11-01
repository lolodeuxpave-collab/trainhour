interface User {
  id: number;
  login: string;
  login_name: string;
  source_id: number;
  full_name: string;
  email: string;
  avatar_url: string;
  html_url: string;
  language: string;
  is_admin: boolean;
  last_login: string;
  created: string;
  restricted: boolean;
  active: boolean;
  prohibit_login: boolean;
  location: string;
  website: string;
  description: string;
  visibility: string;
  followers_count: number;
  following_count: number;
  starred_repos_count: number;
  username: string;
}

interface Repository {
  id: number;
  name: string;
  owner: string;
  full_name: string;
}

export interface IssueType {
  id: number;
  url: string;
  html_url: string;
  number: number;
  user: User;
  original_author: string;
  original_author_id: number;
  title: string;
  body: string;
  ref: string;
  assets: any[];
  labels: string[];
  milestone: any | null;
  assignee: any | null;
  assignees: any | null;
  state: string;
  is_locked: boolean;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  due_date: string | null;
  time_estimate: number;
  pull_request: any | null;
  repository: Repository;
  pin_order: number;
}

export type IssuesResponse = IssueType[];

