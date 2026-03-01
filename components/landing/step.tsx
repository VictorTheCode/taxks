const Step = ({ number, text }: { number: number; text: string }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
      {number}
    </div>
    <p className="text-gray-700">{text}</p>
  </div>
);

export default Step;
