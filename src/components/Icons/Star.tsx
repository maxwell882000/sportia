interface Props {
    progress: number,
    className?: string
}

function Star({progress, className}: Props) {
    // Ensure progress is clamped between 0 and 100
    const clampedProgress = Math.max(0, Math.min(100, progress * 100));

    return (
        <svg
            className={className}
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background path */}
            <path
                d="M8.50016 0.583374L10.9464 5.53921L16.4168 6.33879L12.4585 10.1942L13.3927 15.6409L8.50016 13.068L3.60766 15.6409L4.54183 10.1942L0.583496 6.33879L6.05391 5.53921L8.50016 0.583374Z"
                fill="#e0e0e0" // Background color (unfilled portion)
            />
            {/* Filled portion path */}
            <path
                d="M8.50016 0.583374L10.9464 5.53921L16.4168 6.33879L12.4585 10.1942L13.3927 15.6409L8.50016 13.068L3.60766 15.6409L4.54183 10.1942L0.583496 6.33879L6.05391 5.53921L8.50016 0.583374Z"
                fill="#F79009" // Filled color
                clipPath={`inset(0 ${100 - clampedProgress}% 0 0)`} // Clip the filled portion
            />
        </svg>
    );
}

export default Star
