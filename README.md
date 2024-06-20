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
