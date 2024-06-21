# kome_sanpo

## docker の使用方法

- Docker Image の作成

```
docker compose build
```

- コンテナの起動

```
docker compose up -d
```

- コンテナ内の app へ移動。以降、コンテナ内で作業を行う。

```
docker container exec -it kome_sanpo_app sh
```

- マイグレーションの実行。（schema に変更を加えた場合のみ）

```
npx prisma migrate dev --name <migration_name>
```

- データベースにテーブルを作る。（初回のみ）

```
npx prisma db push
```

- DB に初期データを取り込む。（初回と seed.ts に変更を加えた場合のみ）

```
npx prisma db seed
```

- アプリケーション起動

```
npm run dev
```

- Prisma Studio でテーブルへのアクセス。（必要であれば）

```
npx prisma studio
```

- コンテナから出る

```
exit
```

- コンテナの終了

```
docker compose down
```

## 環境変数

| 変数名       | 役割                                             | ローカル環境での値                                            |
| ------------ | ------------------------------------------------ | ------------------------------------------------------------- |
| DB_HOST      | DB のホスト名（Docker で使用）                   | db                                                            |
| DB_NAME      | 　 DB のデータベース名（Docker で使用）          | kome_sanpo_db                                                 |
| DB_USER      | DB のユーザー名（Docker で使用）                 | admin                                                         |
| DB_PASS      | DB のパスワード（Docker で使用）                 | ai8515                                                        |
| DATABASE_URL | prisma と DB を接続するための URL                | postgresql://admin:ai8515@db:5432/kome_sanpo_db?schema=public |
| DIRECT_URL   | プーリング（接続の再利用）を使用しない場合の URL | postgresql://admin:ai8515@db:5432/kome_sanpo_db?schema=public |
