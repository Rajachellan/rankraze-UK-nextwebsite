/** Time-based ISR for all `/careers` routes; must match `CAREERS_JOBS_REVALIDATE_SECONDS` in `api/jobs-cache.ts`. */
export const revalidate = 300;

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
