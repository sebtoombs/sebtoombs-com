export interface Props {
  className?: string;
  pubDate?: string;
}

export default function OldPostAlert(props: Props) {
  const { className, pubDate, ...rest } = props;

  const oneYear = 1000 * 60 * 60 * 24 * 365;
  const isOld = pubDate
    ? new Date().getTime() - new Date(pubDate).getTime() > oneYear
    : false;

  if (!isOld) return null;

  return (
    <div
      className={`border-l-4 border-amber-500 rounded-sm overflow-hidden bg-amber-50 p-4 ${
        className || ""
      }`}
      {...rest}
    >
      <p className="text-lg text-amber-900">
        <strong>Note: </strong>this post is more than a year old, and may no
        longer be accurate or relevant.
      </p>
    </div>
  );
}
