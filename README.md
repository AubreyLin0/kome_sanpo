# kome_sanpo

## docker の使用方法

1. Docker Image の作成

```
docker compose build
```

2. コンテナの起動

```
docker compose up -d
```

3. コンテナ内の app へ移動。以降、コンテナ内で作業を行う。

```
docker container exec -it kome_sanpo_app sh
```

4. マイグレーションの実行。（初回と schema に変更を加えた場合のみ）

```
npx prisma migrate dev --name my_migrate_init
```

5. DB に初期データを取り込む。（初回と seed.ts に変更を加えた場合のみ）

```
npx prisma db seed
```

6. アプリケーション起動

```
npm run dev
```

7. Prisma Studio でテーブルへのアクセス。（必要であれば）

```
npx prisma studio
```

8. コンテナから出る

```
exit
```

9. コンテナの終了

```
docker compose down
```

## 環境変数

| 変数名       | 役割                                    | ローカル環境での値                                            |
| ------------ | --------------------------------------- | ------------------------------------------------------------- |
| DB_HOST      | DB のホスト名（Docker で使用）          | db                                                            |
| DB_NAME      | 　 DB のデータベース名（Docker で使用） | kome_sanpo_db                                                 |
| DB_USER      | DB のユーザー名（Docker で使用）        | admin                                                         |
| DB_PASS      | DB のパスワード（Docker で使用）        | ai8515                                                        |
| DATABASE_URL | prisma と DB を接続するための URL       | postgresql://admin:ai8515@db:5432/kome_sanpo_db?schema=public |
