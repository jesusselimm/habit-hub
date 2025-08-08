import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: number | string;
  height?: number | string;
  animation?: "pulse" | "wave" | false;
  children?: React.ReactNode;
}

export function Skeleton({
  className,
  variant = "text",
  width,
  height,
  animation = "pulse",
  children,
  ...props
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "circular":
        return "rounded-full";
      case "rectangular":
        return "rounded-none";
      case "rounded":
        return "rounded-md";
      case "text":
      default:
        return "rounded-sm";
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case "wave":
        return "animate-wave";
      case "pulse":
        return "animate-pulse";
      case false:
        return "";
      default:
        return "animate-pulse";
    }
  };

  const getSize = () => {
    const styles: React.CSSProperties = {};
    
    if (width) {
      styles.width = typeof width === "number" ? `${width}px` : width;
    }
    
    if (height) {
      styles.height = typeof height === "number" ? `${height}px` : height;
    }
    
    // Text variant için varsayılan yükseklik
    if (variant === "text" && !height) {
      styles.height = "1.2em";
    }
    
    return styles;
  };

  // Eğer children varsa, onların boyutlarını al
  if (children) {
    return (
      <div
        className={cn(
          "bg-gray/20",
          getVariantClasses(),
          getAnimationClasses(),
          className
        )}
        style={getSize()}
        {...props}
      >
        <div className="invisible">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-gray/20",
        getVariantClasses(),
        getAnimationClasses(),
        // Text için varsayılan boyut
        variant === "text" && !width && "w-full",
        // Circular için varsayılan boyut
        variant === "circular" && !width && !height && "w-10 h-10",
        className
      )}
      style={getSize()}
      {...props}
    />
  );
}

// Wave animasyonu için CSS
export const skeletonWaveStyles = `
@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-wave {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: wave 1.6s linear infinite;
}

.animate-wave::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
}
`;