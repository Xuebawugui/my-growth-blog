import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// 获取所有文章数据
export function getAllPosts() {
  // 获取 posts 目录下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  
  // 遍历文件名，解析每篇文章
  const allPostsData = fileNames.map((fileName) => {
    // 移除 .md 后缀获取 slug
    const slug = fileName.replace(/\.md$/, '');
    
    // 读取文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // 使用 gray-matter 解析文章的前置元数据
    const { data, content } = matter(fileContents);
    
    // 确保返回所有必需的字段
    return {
      slug,
      title: data.title || '',
      date: data.date ? data.date.toString() : '',
      tags: data.tags || [],
      excerpt: data.excerpt || content.slice(0, 200) + '...'
    };
  });
  
  // 按日期排序
  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 获取单篇文章数据
export async function getPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // 使用 gray-matter 解析文章内容和前置元数据
  const { data, content } = matter(fileContents);
  
  // 使用 remark 将 Markdown 转换为 HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();
  
  // 返回文章数据
  return {
    slug,
    title: data.title || '',
    date: data.date ? data.date.toString() : '',
    tags: data.tags || [],
    excerpt: data.excerpt || content.slice(0, 200) + '...',
    content: contentHtml
  };
}

// 获取所有标签
export function getAllTags() {
  const posts = getAllPosts();
  const tags = new Set();
  
  posts.forEach(post => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  
  return Array.from(tags);
}

// 获取指定标签的所有文章
export function getPostsByTag(tag) {
  const posts = getAllPosts();
  return posts.filter(post => post.tags && post.tags.includes(tag));
} 