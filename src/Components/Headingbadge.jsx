export default function Headingbadge({ heading }) {
  return (
    <div className="flex justify-center">
      <div className="text-4xl rounded-lg  font-bold text-center ">
        {heading}
      </div>
    </div>
  );
}
