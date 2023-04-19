import React from 'react';

const Category = ({category}) => {
    return (
        <div className="col-lg-4 col-md-6">
              <div className="categorie-item">
                <div
                  className="ci-thumb set-bg"
                  data-setbg="img/categories/2.jpg"
                  style={{ backgroundImage: "url('img/categories/2.jpg')" }}
                />
                <div className="ci-text">
                  <h5>{category.name}</h5>
                  <p>{category.slug}</p>
                  <span>{category.categories.length} {category.categories.length > 1 ? 'Cours': 'Cour'}</span>
                </div>
              </div>
            </div>
    );
};

export default Category;