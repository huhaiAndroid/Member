package com.newdjk.member.greendao.gen;

import android.database.Cursor;
import android.database.sqlite.SQLiteStatement;

import org.greenrobot.greendao.AbstractDao;
import org.greenrobot.greendao.Property;
import org.greenrobot.greendao.internal.DaoConfig;
import org.greenrobot.greendao.database.Database;
import org.greenrobot.greendao.database.DatabaseStatement;

import com.newdjk.member.ui.entity.ImDataEntity;

// THIS CODE IS GENERATED BY greenDAO, DO NOT EDIT.
/** 
 * DAO for table "IM_DATA_ENTITY".
*/
public class ImDataEntityDao extends AbstractDao<ImDataEntity, Long> {

    public static final String TABLENAME = "IM_DATA_ENTITY";

    /**
     * Properties of entity ImDataEntity.<br/>
     * Can be used for QueryBuilder and for referencing column names.
     */
    public static class Properties {
        public final static Property Id = new Property(0, Long.class, "id", true, "_id");
        public final static Property LastMsg = new Property(1, String.class, "lastMsg", false, "LAST_MSG");
        public final static Property LastTime = new Property(2, long.class, "lastTime", false, "LAST_TIME");
        public final static Property Identifier = new Property(3, String.class, "identifier", false, "IDENTIFIER");
        public final static Property FaceUrl = new Property(4, String.class, "faceUrl", false, "FACE_URL");
        public final static Property NickName = new Property(5, String.class, "nickName", false, "NICK_NAME");
        public final static Property UnReadNum = new Property(6, long.class, "unReadNum", false, "UN_READ_NUM");
        public final static Property Type = new Property(7, int.class, "type", false, "TYPE");
    }


    public ImDataEntityDao(DaoConfig config) {
        super(config);
    }
    
    public ImDataEntityDao(DaoConfig config, DaoSession daoSession) {
        super(config, daoSession);
    }

    /** Creates the underlying database table. */
    public static void createTable(Database db, boolean ifNotExists) {
        String constraint = ifNotExists? "IF NOT EXISTS ": "";
        db.execSQL("CREATE TABLE " + constraint + "\"IM_DATA_ENTITY\" (" + //
                "\"_id\" INTEGER PRIMARY KEY AUTOINCREMENT ," + // 0: id
                "\"LAST_MSG\" TEXT," + // 1: lastMsg
                "\"LAST_TIME\" INTEGER NOT NULL ," + // 2: lastTime
                "\"IDENTIFIER\" TEXT," + // 3: identifier
                "\"FACE_URL\" TEXT," + // 4: faceUrl
                "\"NICK_NAME\" TEXT," + // 5: nickName
                "\"UN_READ_NUM\" INTEGER NOT NULL ," + // 6: unReadNum
                "\"TYPE\" INTEGER NOT NULL );"); // 7: type
    }

    /** Drops the underlying database table. */
    public static void dropTable(Database db, boolean ifExists) {
        String sql = "DROP TABLE " + (ifExists ? "IF EXISTS " : "") + "\"IM_DATA_ENTITY\"";
        db.execSQL(sql);
    }

    @Override
    protected final void bindValues(DatabaseStatement stmt, ImDataEntity entity) {
        stmt.clearBindings();
 
        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }
 
        String lastMsg = entity.getLastMsg();
        if (lastMsg != null) {
            stmt.bindString(2, lastMsg);
        }
        stmt.bindLong(3, entity.getLastTime());
 
        String identifier = entity.getIdentifier();
        if (identifier != null) {
            stmt.bindString(4, identifier);
        }
 
        String faceUrl = entity.getFaceUrl();
        if (faceUrl != null) {
            stmt.bindString(5, faceUrl);
        }
 
        String nickName = entity.getNickName();
        if (nickName != null) {
            stmt.bindString(6, nickName);
        }
        stmt.bindLong(7, entity.getUnReadNum());
        stmt.bindLong(8, entity.getType());
    }

    @Override
    protected final void bindValues(SQLiteStatement stmt, ImDataEntity entity) {
        stmt.clearBindings();
 
        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }
 
        String lastMsg = entity.getLastMsg();
        if (lastMsg != null) {
            stmt.bindString(2, lastMsg);
        }
        stmt.bindLong(3, entity.getLastTime());
 
        String identifier = entity.getIdentifier();
        if (identifier != null) {
            stmt.bindString(4, identifier);
        }
 
        String faceUrl = entity.getFaceUrl();
        if (faceUrl != null) {
            stmt.bindString(5, faceUrl);
        }
 
        String nickName = entity.getNickName();
        if (nickName != null) {
            stmt.bindString(6, nickName);
        }
        stmt.bindLong(7, entity.getUnReadNum());
        stmt.bindLong(8, entity.getType());
    }

    @Override
    public Long readKey(Cursor cursor, int offset) {
        return cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0);
    }    

    @Override
    public ImDataEntity readEntity(Cursor cursor, int offset) {
        ImDataEntity entity = new ImDataEntity( //
            cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0), // id
            cursor.isNull(offset + 1) ? null : cursor.getString(offset + 1), // lastMsg
            cursor.getLong(offset + 2), // lastTime
            cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3), // identifier
            cursor.isNull(offset + 4) ? null : cursor.getString(offset + 4), // faceUrl
            cursor.isNull(offset + 5) ? null : cursor.getString(offset + 5), // nickName
            cursor.getLong(offset + 6), // unReadNum
            cursor.getInt(offset + 7) // type
        );
        return entity;
    }
     
    @Override
    public void readEntity(Cursor cursor, ImDataEntity entity, int offset) {
        entity.setId(cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0));
        entity.setLastMsg(cursor.isNull(offset + 1) ? null : cursor.getString(offset + 1));
        entity.setLastTime(cursor.getLong(offset + 2));
        entity.setIdentifier(cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3));
        entity.setFaceUrl(cursor.isNull(offset + 4) ? null : cursor.getString(offset + 4));
        entity.setNickName(cursor.isNull(offset + 5) ? null : cursor.getString(offset + 5));
        entity.setUnReadNum(cursor.getLong(offset + 6));
        entity.setType(cursor.getInt(offset + 7));
     }
    
    @Override
    protected final Long updateKeyAfterInsert(ImDataEntity entity, long rowId) {
        entity.setId(rowId);
        return rowId;
    }
    
    @Override
    public Long getKey(ImDataEntity entity) {
        if(entity != null) {
            return entity.getId();
        } else {
            return null;
        }
    }

    @Override
    public boolean hasKey(ImDataEntity entity) {
        return entity.getId() != null;
    }

    @Override
    protected final boolean isEntityUpdateable() {
        return true;
    }
    
}
