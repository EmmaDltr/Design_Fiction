'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".tag");
  let selectedTags = new Set(["all"]);

  function updateTagsUI() {
    tags.forEach(tag => {
      const tagName = tag.dataset.tag;
      if (selectedTags.has(tagName)) {
        tag.classList.add("selected");
      } else {
        tag.classList.remove("selected");
      }
    });
  }

  function filterCatalogue() {
    const items = document.querySelectorAll('.catalogue__item');

    if (selectedTags.has('all')) {
      items.forEach(item => {
        item.style.display = '';
      });
      return;
    }

    items.forEach(item => {
      // Récupérer la liste des genres, séparés par espace
      const itemGenres = (item.getAttribute('data-genre') || '').toLowerCase().split(' ');
      
      // Afficher si un des genres correspond à un tag sélectionné
      if (itemGenres.some(genre => selectedTags.has(genre))) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  tags.forEach(tag => {
    tag.addEventListener("click", (e) => {
      const tagName = tag.dataset.tag;

      if (e.target.classList.contains("tag__close")) {
        selectedTags.delete(tagName);
        if (selectedTags.size === 0) selectedTags.add("all");
        updateTagsUI();
        filterCatalogue();
        e.stopPropagation();
        return;
      }

      if (tagName === "all") {
        selectedTags.clear();
        selectedTags.add("all");
      } else {
        if (selectedTags.has(tagName)) {
          selectedTags.delete(tagName);
        } else {
          selectedTags.add(tagName);
          selectedTags.delete("all");
        }
        if (selectedTags.size === 0) selectedTags.add("all");
      }

      updateTagsUI();
      filterCatalogue();
    });
  });

  updateTagsUI();
  filterCatalogue();
});