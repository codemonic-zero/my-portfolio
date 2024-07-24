

export function Skill({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="max-w-sm">
      <div className="relative w-full h-64">
        <img src={imageSrc} alt={imageAlt} />

        {/* <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        /> */}
        {/* <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        /> */}
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
}
