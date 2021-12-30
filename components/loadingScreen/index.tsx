import styles from './index.module.scss';

function LoadingScreen() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.line}>
				<div></div>
			</div>
		</div>
	);
}

export default LoadingScreen;
