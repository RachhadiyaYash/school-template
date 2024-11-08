export default function TitleBadge({ title }) {
  return (
    <div className="flex justify-center">
      <div className="bg-absoluteWhite text-gray-20 border-2 border-black rounded-lg  font-semibold text-center px-2 py-1">
        {title}
      </div>
    </div>
  );
}
