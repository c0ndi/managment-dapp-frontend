export interface AccountOptions {
	account: String;
	metamaskConnection: Boolean;
}

export interface FormData {
	fullName: String;
	age: Number;
	gender: String;
	jobType: String;
}

export interface LoadingScreenProps {
	isWelcomePage: Boolean;
}

export interface WorkerProps {
	_id: Number;
	_age: Number;
	_level: Number;
	_address: String;
	_fullName: String;
	_gender: String;
	_role: String;
	_isWorker: Boolean;
	_isRegistered: Boolean;
}
