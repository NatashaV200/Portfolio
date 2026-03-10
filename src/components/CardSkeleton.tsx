/**
 * Skeleton loader for cards during initial render or async content loading
 * Provides visual feedback and improves perceived performance
 */

export function CardSkeleton() {
  return (
    <div className="p-6 rounded-lg bg-background border border-border animate-pulse">
      {/* Header skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="h-6 bg-muted rounded-md w-3/4" />
        <div className="flex gap-2">
          <div className="h-9 w-20 bg-muted rounded-md" />
          <div className="h-9 w-20 bg-muted rounded-md" />
        </div>
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
        <div className="h-4 bg-muted rounded-md w-4/5" />
      </div>

      {/* Tech tags skeleton */}
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 bg-muted rounded-md" />
        <div className="h-6 w-20 bg-muted rounded-md" />
        <div className="h-6 w-24 bg-muted rounded-md" />
        <div className="h-6 w-16 bg-muted rounded-md" />
      </div>
    </div>
  );
}

export function SkillCategorySkeleton() {
  return (
    <div className="p-6 rounded-lg bg-background border border-border animate-pulse">
      {/* Title skeleton */}
      <div className="h-5 bg-muted rounded-md w-24 mb-4" />

      {/* Skill tags skeleton */}
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-20 bg-muted rounded-md" />
        <div className="h-6 w-24 bg-muted rounded-md" />
        <div className="h-6 w-16 bg-muted rounded-md" />
        <div className="h-6 w-28 bg-muted rounded-md" />
        <div className="h-6 w-20 bg-muted rounded-md" />
      </div>
    </div>
  );
}

export function ExperienceCardSkeleton() {
  return (
    <div className="p-6 rounded-lg bg-background border border-border animate-pulse">
      {/* Header skeleton */}
      <div className="mb-4">
        <div className="h-6 bg-muted rounded-md w-1/2 mb-2" />
        <div className="h-4 bg-muted rounded-md w-1/3" />
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
      </div>

      {/* Highlights skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
        <div className="h-4 bg-muted rounded-md w-4/5" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
      </div>
    </div>
  );
}

export function StatSkeleton() {
  return (
    <div className="p-5 rounded-lg bg-background border border-border animate-pulse">
      <div className="h-8 bg-muted rounded-md w-12 mb-2" />
      <div className="h-4 bg-muted rounded-md w-20" />
    </div>
  );
}
