type PopupProps = {
  title: string;
  description: string;
};

export default function JobPopup({ title, description }: PopupProps) {
  return (
    <>
      {/* modal trigger */}
      <input id="job-popup" type="checkbox" className="peer hidden" />

      {/* overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm 
                      hidden peer-checked:flex items-center justify-center z-[999] p-4">

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl
                        w-[90%] max-w-xl relative">

          {/* close button */}
          <label
            htmlFor="job-popup"
            className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex 
                   items-center justify-center shadow cursor-pointer dark:bg-gray-800"
          >
            ✕
          </label>

          <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-6">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
