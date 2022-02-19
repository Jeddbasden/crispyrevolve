import React, { useState } from "react";
import { Button, ProfileButtonBtn } from "../StyledComponents/Button-style";

const ProfileButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <ProfileButtonBtn type="button" onclick={}>
        <i class="fa-solid fa-user-alien"></i>
      </ProfileButtonBtn>
      {open && (
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
