import { BlogHeader } from "../_components/BlogHeader";
import { BlogAuthor } from "../_components/BlogAuthor";
import { CodeBlock } from "../_components/CodeBlock";

const BLOG_DATA: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    tags: string[];
  }
> = {
  "react-hooks-deep-dive": {
    title: "React Hooks: A Deep Dive Into the Essentials",
    date: "Aug 3, 2026",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Frontend"],
  },
};

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = BLOG_DATA[blogId];

  if (!blog) {
    return (
      <div className="w-full max-w-3xl mx-auto px-6 pt-30 pb-20 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          Blog not found
        </h1>
        <p className="text-gray-500 mt-2">
          The blog you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    );
  }

  return (
    <article>
      <BlogHeader
        title={blog.title}
        date={blog.date}
        readTime={blog.readTime}
        tags={blog.tags}
      />

      <div className="w-full max-w-3xl mx-auto px-6 prose prose-slate prose-lg prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-code:text-teal-900 prose-code:bg-teal-900/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal">
        <p>
          React hooks changed how we write components. No more class components,
          no more <code>this</code> binding, no more lifecycle methods scattered
          across <code>componentDidMount</code>, <code>componentDidUpdate</code>
          , and <code>componentWillUnmount</code>. Hooks let us manage state,
          handle side effects, and share logic, all inside function components.
        </p>

        <p>
          But using hooks is one thing. Using them <em>well</em> is another.
          This post breaks down the hooks I reach for daily, when to use each,
          and the mistakes I see repeated across codebases.
        </p>

        <h2>useState: State That Triggers Re-renders</h2>

        <p>
          <code>useState</code> is the most basic hook. It holds a value and
          gives you a function to update it. When you call the setter, React
          re-renders the component with the new value.
        </p>

        <CodeBlock
          filename="Counter.tsx"
          code={`const [count, setCount] = useState(0);

// Update based on previous state
setCount(prev => prev + 1);`}
        />

        <p>
          The common mistake: updating state objects without spreading the
          previous state. Always use the functional updater when the new state
          depends on the old one.
        </p>

        <h2>useEffect: Side Effects and Cleanup</h2>

        <p>
          <code>useEffect</code> runs after render. It&apos;s where you put API
          calls, subscriptions, timers, and DOM manipulation. The dependency
          array controls when it re-runs.
        </p>

        <CodeBlock
          filename="DataFetcher.tsx"
          language="tsx"
          code={`useEffect(() => {
  const controller = new AbortController();

  fetch("/api/data", { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data));

  return () => controller.abort();
}, []); // Empty array = run once on mount`}
        />

        <p>
          The cleanup function is not optional. If you fetch data, open
          connections, or subscribe to events, you need to clean up. Memory
          leaks are real, and they&apos;re silent.
        </p>

        <h2>useRef: Values That Persist Without Re-rendering</h2>

        <p>
          <code>useRef</code> holds a mutable value that doesn&apos;t trigger
          re-renders when it changes. It&apos;s perfect for DOM references,
          timers, and any value that needs to persist across renders without
          causing updates.
        </p>

        <CodeBlock
          filename="SearchInput.tsx"
          language="tsx"
          code={`const inputRef = useRef<HTMLInputElement>(null);

// Access DOM node
inputRef.current?.focus();

// Or hold a mutable value
const intervalRef = useRef<NodeJS.Timeout>();`}
        />

        <p>
          Don&apos;t use <code>useRef</code> for state. If the UI needs to
          update when the value changes, use <code>useState</code>. useRef is
          for values the render doesn&apos;t care about.
        </p>

        <h2>useMemo and useCallback: Expensive Computations</h2>

        <p>
          <code>useMemo</code> caches a computed value. <code>useCallback</code>{" "}
          caches a function. Both prevent unnecessary recalculations and
          re-renders when dependencies haven&apos;t changed.
        </p>

        <CodeBlock
          filename="OptimizedList.tsx"
          language="tsx"
          code={`const sorted = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

const handleSubmit = useCallback((data: FormData) => {
  submitForm(data);
}, []);`}
        />

        <p>
          The mistake: memoizing everything. Not every function needs{" "}
          <code>useCallback</code>. Not every computation needs{" "}
          <code>useMemo</code>. Profile first, optimize second.
        </p>

        <h2>useReducer: When useState Gets Messy</h2>

        <p>
          When state logic gets complex, multiple related values, nested
          updates, or actions that depend on each other, <code>useReducer</code>{" "}
          gives you a cleaner pattern. It extracts state logic into a reducer
          function, similar to Redux.
        </p>

        <CodeBlock
          filename="reducer.ts"
          language="typescript"
          code={`const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}`}
        />

        <p>
          If your state has more than 2-3 related values, or the update logic is
          getting complex, reach for <code>useReducer</code>. It scales better
          than multiple <code>useState</code> calls.
        </p>
        <h2>When to Use What:</h2>
        <ul>
          <li>
            <strong>- Simple value that triggers re-render?</strong> → useState
          </li>
          <li>
            <strong>- Side effect (fetch, subscribe, timer)?</strong> →
            useEffect
          </li>
          <li>
            <strong>- DOM reference or mutable value?</strong> → useRef
          </li>
          <li>
            <strong>- Expensive computation?</strong> → useMemo
          </li>
          <li>
            <strong>- Stable function reference?</strong> → useCallback
          </li>
          <li>
            <strong>- Complex state logic?</strong> → useReducer
          </li>
        </ul>

        <p>
          Hooks are simple tools. The complexity comes from knowing when and how
          to combine them. Start with the simplest solution, and only add
          complexity when the code demands it.
        </p>
      </div>

      <BlogAuthor />
    </article>
  );
}
