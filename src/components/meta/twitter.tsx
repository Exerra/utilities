import MetaProps from "../../types/metaProps";

const TwitterMeta = ({ title, description, uri, image}: MetaProps) => {
	return (
		<>
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={`https://utilities.exerra.xyz${uri}`} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />
		</>
	)
}

export default TwitterMeta