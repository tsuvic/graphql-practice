import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

/**
 * Books テーブルの Entity モデル
 */
const Book = sequelize.define('Books', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
}, {
    // タイムスタンプの属性 (updatedAt, createdAt) が不要ならば次のプロパティは false
    timestamps: false,

    // テーブル名を変更したくない場合は次のプロパティを true
    // デフォルトでは sequelize はテーブル名を複数形に変更する
    freezeTableName: true
});

export default Book;