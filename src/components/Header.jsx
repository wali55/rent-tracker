import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <div>
          <img
            src={Logo}
            alt="logo"
            width={30}
            height={30}
            className="size-7"
          />
        </div>
        <h1 className="text-lg font-semibold">ভাড়া ট্র্যাকার</h1>
      </div>
    </div>
  );
};

export default Header;
