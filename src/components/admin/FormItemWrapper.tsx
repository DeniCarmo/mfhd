type FormItemWrapperProps = {
  children: React.ReactNode;
};

export const FormItemWrapper = ({ children }: FormItemWrapperProps) => {
  return (
    <div className="w-full max-w-[500px] h-auto flex items-start justify-center flex-col border border-white rounded-2xl p-6 mb-4">
      {children}
    </div>
  );
};
