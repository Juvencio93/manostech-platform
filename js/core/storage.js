// ======================================================
// Manos Tech Platform
// Storage
// ======================================================

class Storage {

    set(key, value) {

        localStorage.setItem(key, JSON.stringify(value));

    }

    get(key) {

        const value = localStorage.getItem(key);

        if (!value) {
            return null;
        }

        try {

            return JSON.parse(value);

        } catch {

            return value;

        }

    }

    remove(key) {

        localStorage.removeItem(key);

    }

    clear() {

        localStorage.clear();

    }

    has(key) {

        return localStorage.getItem(key) !== null;

    }

}

const storage = new Storage();

export default storage;
