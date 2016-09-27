Enhance objects that are constructed outside of your control

The idea of this module is to be able to construct an enhanced version of an object, without having any other code being aware of this enhancement. This allows callers to pass a "public" version of the object, which might have been created elsewhere, while still being able to maintain a private state for it.

## Usage

```javascript
const factory = mixup(mixupConstructor);
```

Where `mixupConstructor` is a function that constructs a mixup from an object, and `factory` is a function that gives the constructed mixup for a given object. The constructor is called the first time that a mixup for an is requested on the `factory`.

## Example

This example shows how this can be used to add a cancellable rotation animation to an element

```javascript

const asRotatable = mixup(el => {
	return {
		el,
		interval : null
	};
});


export function startRotating(el) {
	const rotatable = asRotatable(el);
	let rotation = 0;
	r.interval = setInterval(function() {
		rotation += 10;
		el.style.transform = `rotate(${rotation}deg)`;
	}, 50);
}

export function stopRotating(el) {
	const rotatable = asRotatable(el);
	clearInterval(rotatable.interval);
}

///Usage:
const spinner = document.getElementById('spinner');
startRotating(spinner);

/** ... **/
stopRotating(spinner);
```


