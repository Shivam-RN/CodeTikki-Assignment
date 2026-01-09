import {Loader} from 'lucide-react'
export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <Loader className="animate-spin h-12 w-12 text-blue-600" />
      </div>
      <p className="text-gray-600 mt-4 font-medium">Loading notes...</p>
    </div>
  );
}
