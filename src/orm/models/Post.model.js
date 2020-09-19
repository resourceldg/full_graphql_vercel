const { DataTypes } = require('sequelize');
export default (sequelize, { BOOLEAN, STRING, TEXT, UUID, UUIDV4 }) => {
    const Post = sequelize.define('Post', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: UUID,
        defaultValue: UUIDV4()
      },
      title: {
        type: STRING,
        allowNull: false
      },
      slug: {
        type: STRING,
        unique: true,
        allowNull: false
      },
      readingTime: {
        type: STRING,
        allowNull: false,
        defaultValue: '3 min'
      },
      content: {
        type: TEXT,
        allowNull: false
      },
      language: {
        type: STRING,
        allowNull: false,
        defaultValue: 'es'
      },
      image: {
        type: STRING
      },
      published: {
        type: BOOLEAN,
        defaultValue: false
      }
    })

    return Post
}