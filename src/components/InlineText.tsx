// Renders a string with [text](url) markdown links as <a> tags.
// Usage: <InlineText content="see [my repo](https://github.com/...)" />

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

const InlineText = ({ content, className }: { content: string; className?: string }) => {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(content)) !== null) {
    if (match.index > last) parts.push(content.slice(last, match.index));
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:opacity-70 transition-opacity"
      >
        {match[1]}
      </a>
    );
    last = match.index + match[0].length;
  }
  if (last < content.length) parts.push(content.slice(last));

  return <span className={className}>{parts}</span>;
};

export default InlineText;
