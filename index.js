export default function mixup(factory) {
	const cache = new WeakMap();
	return subject => {
		if (!cache.has(subject)) {
			cache.set(subject, factory(subject));
		}
		return cache.get(subject);
	}
}
