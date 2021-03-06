import icons from 'url:../../img/icons.svg';
import View from './view.js';

class bookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookamrks yet. Find a nice recipe';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(results) {
    const id = window.location.hash.slice(1);

    return `<li class="preview">
<a class="preview__link ${
      results.id === id ? 'preview__link--active' : ''
    }" href="#${results.id}">
  <figure class="preview__fig">
    <img src="${results.image}" alt="Test" />
  </figure>
  <div class="preview__data">
    <h4 class="preview__title">${results.title}</h4>
    <p class="preview__publisher">${results.publisher}</p>
    <div class="preview__user-generated ${results.key ? '' : 'hidden'}">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
  </div>
</a>
</li>`;
  }
}

export default new bookmarksView();
