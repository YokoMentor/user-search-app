export interface DataResponse {
	login: string;
	avatar_url: string;
	html_url: string;
	created_at: string;
	bio: string;
	public_repos: string;
	followers: string;
	following: string;
	location: string,
	twitter_username: string,
	blog: string;
	company: string;
};

export async function fetchData(login: string): Promise<DataResponse> {
	let resultData;
	try {
		const response = await fetch('https://api.github.com/users/' + login);
		resultData = await response.json();
	} catch (error) {
		const result: DataResponse = {
			login: '',
			avatar_url: '',
			html_url: '',
			created_at: '',
			bio: '',
			public_repos: '',
			followers: '',
			following: '',
			location: '',
			twitter_username: '',
			blog: '',
			company: ''
		};
		return result
	}
	return resultData
}