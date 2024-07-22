import "./../css/logo.css";

export default function Logo() {
  return (
    <div className="max-w-64 absolute">
      <div id="logo" className="grid grid-flow-row content-start">
        <h2
          data-text="S-Register"
          className="uppercase animate-text bg-gradient-to-r from-black/60 via-white/10 to-black bg-clip-text text-transparent text-5xl font-black text-center"
        >
          &nbsp;S-Register<span className="text-5xl"></span>&nbsp;
        </h2>
      </div>
    </div>
  );
}
