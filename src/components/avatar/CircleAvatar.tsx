import React from "react";

type AvatarProps = {
  imageUrl?: string; // Optional URL for the avatar image
  initials?: string; // Fallback initials if imageUrl is not provided
  icon?: string | React.ReactNode; // Icon can be a string (URL) or a ReactNode
  size?: number; // Diameter of the avatar,
  onClick: () => void;
};

const CircleAvatar: React.FC<AvatarProps> = ({
  imageUrl,
  initials,
  icon,
  size = 100,
  onClick,
}) => {
  return (
    <div
      className="relative flex items-center justify-center overflow-visible rounded-full bg-[#1C1F24]"
      style={{ width: size, height: size }}
    >
      {/* Avatar Image or Initials */}

      <div
        className={"overflow-hidden rounded-full flex items-center justify-center"}
        style={{ width: size, height: size }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            className="flex items-center justify-center text-xl font-bold text-[#ACEF03]"
            style={{ fontSize: size * 0.3 }}
          >
            {initials || "?"}
          </span>
        )}
      </div>

      {/* Bottom-right Icon */}
      {icon && (
        <button
          onClick={onClick}
          className="translate-y absolute bottom-0 right-2 flex cursor-pointer items-center justify-center rounded-full"
        >
          {typeof icon === "string" ? (
            <img
              src={icon}
              alt="Icon"
              className="h-full w-full rounded-full object-contain"
            />
          ) : (
            icon
          )}
        </button>
      )}
    </div>
  );
};

export default CircleAvatar;
