import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function YoutubeDial() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/2CP_9-jCV6A"
        thumbnailSrc="https://i.ytimg.com/vi/2CP_9-jCV6A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgzzdjeywXcZr6oksSjNF-VlZLlw"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/2CP_9-jCV6A"
        thumbnailSrc="https://i.ytimg.com/vi/2CP_9-jCV6A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgzzdjeywXcZr6oksSjNF-VlZLlw"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
