import { Loader } from "@/shared/ui/loader";

const Loading = () => {
  return (
    <div className="z-50 h-screen w-full bg-white">
      <Loader className="absolute left-1/2 top-1/2 size-10" />
    </div>
  );
};

export default Loading;
