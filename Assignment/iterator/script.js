const items = ["Red", "Green", "Blue", "Yellow", "Purple"];


const iterator = {
    currentIndex: 0,

    
    next() {
        if (this.currentIndex < items.length - 1) {
            this.currentIndex++;
            this.displayCurrentItem();
        } else {
            document.getElementById("display-area").textContent = "End of the list!";
            this.resetIterator();
        }
    },

   
    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayCurrentItem();
        } else {
            document.getElementById("display-area").textContent = "Start of the list!";
        }
    },

    
    displayCurrentItem() {
        document.getElementById("display-area").textContent = items[this.currentIndex];
    },

    
    resetIterator() {
        this.currentIndex = 0;
    }
};


document.addEventListener("DOMContentLoaded", () => {
    iterator.displayCurrentItem();
});
