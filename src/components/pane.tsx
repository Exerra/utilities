import React from "react";

const Pane = ({ title, children, className, subClassName }: { title: string, children: React.ReactNode, className?: string, subClassName?: string }) => {
	return (
		<div className={`p-10 rounded-2xl sf font-semibold ${className}`}>
			<h3 className={"text-5xl"}>{title}</h3>
			<div className={`mt-10 ${subClassName}`}>
				{children}
			</div>
		</div>
	)
}

export default Pane