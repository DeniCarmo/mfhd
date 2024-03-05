type FormWrapperProps = {
  children: React.ReactNode;
};

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <section className="w-full h-auto bg-mf-body-bg flex items-center flex-col py-12">
      {children}
    </section>
  );
};
