import MarkdownIt from 'markdown-it';
import markdownItTaskLists from 'markdown-it-task-lists';

const md = new MarkdownIt().use(markdownItTaskLists)

export const compileMarkdown = (content: string) => {
    return md.render(content)
}
