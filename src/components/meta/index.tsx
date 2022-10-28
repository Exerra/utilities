import Head from "next/head";
import MetaProps from "../../types/metaProps";
import OpenGraphMeta from "./opengraph";
import TwitterMeta from "./twitter";

const Meta = ({ title, description, uri, image }: MetaProps) => {
	let img = image ? image : "https://cdn.exerra.xyz/webp/mockups/exerra-utility.webp"

	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			<OpenGraphMeta title={title} description={description} uri={uri} image={img} />
			<TwitterMeta title={title} description={description} uri={uri} image={img} />

			<link rel={"icon"} href={"https://cdn.exerra.xyz/png/pfp.png"} />
		</Head>
	)
}

export default Meta