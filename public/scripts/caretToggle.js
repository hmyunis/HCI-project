function toggleDetails(id){
    document.getElementById(`package-${id}-details`).classList.toggle('hidden');
    if (document.getElementById(`caret-${id}`).classList.contains('fa-square-caret-down')){
        document.getElementById(`caret-${id}`).classList.remove('fa-square-caret-down');
        document.getElementById(`caret-${id}`).classList.add('fa-square-caret-up');
    } else {
        document.getElementById(`caret-${id}`).classList.remove('fa-square-caret-up');
        document.getElementById(`caret-${id}`).classList.add('fa-square-caret-down');
    }
}