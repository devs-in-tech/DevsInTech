import IconButton from "./iconbutton";

const HeaderSocialMedia = (props) => {
  return (
    <>
      <div>
        <IconButton
          src="discord.svg"
          alt="discord"
          width={props.width}
          height={props.height}
          url="https://discord.com/invite/g7FmxB9uZp"
          className="hover:scale-110 duration-300"
        />
      </div>
      <div>
        <IconButton
          src="github.svg"
          alt="discord"
          width={props.width}
          height={props.height}
          url="https://github.com/devs-in-tech/DevsInTech"
          className="hover:scale-110 duration-300"
        />
      </div>
      <div>
        <IconButton
          src="twitter.svg"
          alt="discord"
          width={props.width}
          height={props.height}
          url="https://twitter.com/devs_in_tech"
          className="hover:scale-110 duration-300"
        />
      </div>
      <div>
        <IconButton
          src="linkedin.svg"
          alt="linkedin"
          width={props.width}
          height={props.height}
          url="https://www.linkedin.com/company/devsintech-community/"
          className="hover:scale-110 duration-300"
        />
      </div>
    </>
  );
};
export default HeaderSocialMedia;
