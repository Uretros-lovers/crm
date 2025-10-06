import Button from "@components/ui/button/Button";
import avatarMock from "@assets/avatarMOCK.png";

type Profile = {
    avatar: string;
    username: string;
};

export default function Profile() {
    const profileMock: Profile = {
        avatar: avatarMock,
        username: "Steven Taylor",
    };
    return (
        <Button type="profile">
            <span>
                <img src={profileMock?.avatar} alt="" />
            </span>
            <p>{profileMock?.username}</p>
        </Button>
    );
}
