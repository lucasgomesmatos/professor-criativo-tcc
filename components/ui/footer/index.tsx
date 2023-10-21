export const Footer = () => {
  return (
    <footer className="mt-6 flex flex-col items-center gap-2 px-4 text-xs text-gray-200">
      <p className="text-center ">
        Mundo Prof. © {new Date().getFullYear()}. <br />
        Alguns direitos reservados.
      </p>
      <p>
        by{" "}
        <a
          href="https://likearocket.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 hover:underline"
        >
          Like a Rocket
        </a>
      </p>
    </footer>
  );
};
