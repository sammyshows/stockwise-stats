export default function Spinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg className="spinner text-blue-600" viewBox="0 0 50 50">
        <circle className="spinner-path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </div>
  )
}