import React from "react";

const getInputValue = (c: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): any => {
	return c.currentTarget.value
}

export default getInputValue