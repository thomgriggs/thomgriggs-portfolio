export function Section({
	className = '',
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<section className={`py-10 md:py-14 ${className}`}>{children}</section>
	);
}
