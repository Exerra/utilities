import MetaProps from "../../types/metaProps";

const OpenGraphMeta = ({ title, description, uri, image}: MetaProps) => {
	return (
		<>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://utilities.exerra.xyz${uri}`} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
		</>
	)
}

export default OpenGraphMeta