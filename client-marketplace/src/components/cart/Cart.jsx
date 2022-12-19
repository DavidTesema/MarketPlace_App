import React from "react";
import CartStores from "./stores/CartStores";


const Cart = () => {
  const cart = [
    {
      storeName: "חוות הבית",
      storeLogo:
        "https://static.wixstatic.com/media/65172a_8a07b6150f704eb3b6563554da874247~mv2.jpg/v1/fill/w_640,h_630,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/65172a_8a07b6150f704eb3b6563554da874247~mv2.jpg",
    },
    {
      storeName: "פירות וירקות",
      storeLogo:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTERUTEhIWFhUXGRgaGBgYFxoeIBsaGyAeHB8fIBkYHSghGxolHRgZIjEhJSorLi4uGh8zODMtNygtLi4BCgoKDg0OGxAQGy8lICYtLTI1NS8yLS0yMDUrLS0tLS0tLS0tLS4tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIANIA8AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xAA9EAACAQIEBAUCAwcCBgMBAAABAhEAAwQSITEFQVFhBhMicYEykaGxwRQjQlLR4fAHYhUkM3KC8RZDklT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAMREAAQMCBAMIAgIDAQEAAAAAAQACEQMhBDFBURJhcRMigZGhscHwBeEy0RQj8UJi/9oADAMBAAIRAxEAPwDuNKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSofEcdbsWzcuuEUbk/kOpPQamtes+PsG0+p1gqqgpJcttlCyd+sVEuaDBKtZQqPaXNaSBrBW20rmHG/9U1yFcNabzP5nywF5NlRjLHkpjv0rVcV4uxl+01q9eBRiCYCqcoMlcyx6TzHSoOrNC30fxGIeztHQ1s6n29rkSbLt+Nxtu0huXXVEG7MQB9zzqs4b4swd9/LtYhC50CkMpJ7ZwM3xXFOAYs32Nm75jJbLG1ZzEgN6ds2pGUE/J71a8VwaMGuq3li2AVOXIS0ZoAHMHQGszsW4PgD71yW9n4NnDFR5nSBbYSLmd77wTC7TexttCFe4ik6gMwBI9iakivzSPEBIm6We4S3qJJY9PbXXpV1wnxJibRSLl4q59IF0gLGkAXJtnWNI59qtGIvBCz1Pwrmt4g8EAX5H7/xd9pXLeG+OcUHIdVdBMh1CuI01a36Rr/tNb7wHjFrFWRestKmQdtCNwf8ANRBq5lQOyXMr4Z9EAkgg5EGVa0pSprOlKwYnEKilnYKo3LEAfc1zTxD/AKolLpTC20dB/GwbU9QARpUHvawS5acLg62Kdw0mz6DzXUq+GuJXv9SsW85cqZo2j0Abn1SYPOATpy1mv/8AkGJuKzXrzMJHljO/1RqQCdImM0daq/yGnJb6f4Wsf5kAzEXJ9o9V36lcGuft2ILFr13NB3uOAI5QNvisQ8VY8LbsLecASoy7zvq28RoNQBFSFYKVX8JUpx32nfO3ou/UrjnDfEfEFuo96+HUETbWPUo5fSNTG87z7Ve2v9UrXnKlyw9tNnYkHI0xqsfTrM7kcqk2qx2RWSp+NrsEgB1tD6Xi/SV0alU3h/xHYxis1hy2QgMCpUidjB5GDr2NXNWLE5paeFwgpSlKKKUpSiJSlKIlQeKcSt4e2bt1sqj5JPIADUk9KzYzEi3be42yKWPsBNcr8V8Xv42wwFtFVTmSASVI01aY2aDpzrPiMSyjZ2Z8fNbsDgnYl/8A8giTbXQTqon+onjI4lUsWLTAZgwzCHzDsJ0gkRzmZjQ6PesvdtjOMqGJKwdu2wPvpUnAFnkNGoOYMRpHLUx0rPwfhF2810WyMkcz7bdTI/Gsj3lxk5r6HCinTpw0EUySL59ehiNItZU3h+5bW6vmiUB9Q7VtWNTBlEe07hwIZf5oG+3M6VQ8S8PZCLdsHzEXNcmAI66nrp8cqif8NvqCcp1gyZO4np0q0OBHJXCrTZTHbSB5gxyg3WSzaZrwNt4YwBBA1HyI33rPxTE4guLV24STlGryNR2JGx+JqwPh5ntpkt+U3N2aYHXLGntNY8XwhrBy3FF5rnpQgFfVB0gHfaJMaViOJpOqQCCdlsc8Q7vxMmbW6X+zvZYjhWvWQuGs3nKmHGuUH4X0R1Y1jwzlXHmvbjUBLb5tQQdSJAEz9j1rYLHHsRlW1aRrflhVy21NtUHcgFyTvoV32NYf+Dks16UW6ZOYm6CxP++6RM95qYNjb39TCrBqT3gADBgSfUD6I8aniN8qyIlwKHzM4B5LHTqa2Pg2KfDoGtYog5dUk7A6AGCJ59ORmq7ErKE3LWYroXQMY56sFGm3bTnWbhvB7l1oSAoALOzABR1Ma8qrJqFwAsev/Mufqr3CkKbu1gCdgbWtEam9hMlda4L4psXLFt7l62rtoQWA9Q0OhOn6Vk434ltYYlWDuwXMVQTlGsFtfSDBrkGL4TdshzYcurH1EiDA/lOpE/FQR5t69kt51BEFXYseYmSJj45960jGlzTwEEjXP2XEb+Dw738XEeEzbIj5EePhdSOM+J7mJZ7l3OZ0tgiAqzrlTkJgSZJy6nWKw4PBWcQMyHyVXRmuMNSQSI9I19Lae1Y/EfDbgs51e24T0mJ2mQG7TMVUqYUEEkRJg/EQdZ9q8e4Ezmu1hWGkwMs07i42iMvMeeuO6wBgDUmB78qlfsj2EVmeY1+J2HYVGwGDW/d9V0WwhBBJgSNeQJ/9VsuF4QcTYNy7dMmQIHTTnvt2qmrXbREndKjianaz3RIA3J9NCFIs+L2ymcoJ5gcz0qt4TjVFxrknMCNlLAIJJJ0/yKm8H8KoVzO0ztqAP618fhLq727d1lBIJ6EajkQDzEd+9eHFU5InLytnB1+dFnilUMBvCNeRtyMWn2O42W7j7KJagGWGZVXKBB2kgmBGnOM0dI1Pi1pLt+XRlYpAYQFJWeupOw+I5zU7/glwvbSwoYtCCCQARuxmdNCSe3tWwXPCdl1y3791nBBD2oXL2AaZHuB8VB2MpCHFwA06j1201WB5FNndd3+V7T5evJa3wvEPgb9y3ZvMMwUsZH8M6H07eo/jW5+F/wDUXPeXC30bOWCC6CNWYwMyQI5CRWqcY4B+zO1xLjXrbr6mbTKR/NAgDbbSnAnykXkgMrAqdCZA31+1WsxwaOOeIcvv3kvamBo4lnG0Z6mZnIbwN/Bd1pULhmINyzbciCyqSO5H5VNrsAyJC+TcC0lpzCUpSvV4lKUoipuP49EQ22TPnBBXqDoa5hiMNcRgtsyjEiSdVHcAaz+nKug+K7OXLeDQR6Y5k67d960XFE3HX1FQuYkEiWJEa76dvxr5r8hUqdu4VIDRMdCLG3ez0y5Zr6P8XDKQcyb5+HpbfNV1/wAMgKzK2pYlsw0J06RG29efDth7S66zBK8gQCBrz3OlRsVxe47raiFZ8hfWJG4B6x+YraMHbQDUbDQVmOIr0mgPIk5TpHTfmum6Q2Dp8/Stc4lwwG5nYDU9Tux3Y9BO1XPDssidB/nKs3EgrCANI1ql4LiiQQQYDMoPXKevWKrqVH16e/DnGUGM/uq9YBFznkNt4669Fs2ItpHoMmenKP61V460LmQEkZSusxseR5aaTUlXrxb4Y+ILqoGUaMzGFEid+ZjkJNZqL3GpLRHTkocLQ09obc17XgdkpmGZiraq7Spn1A66mTOp5ivpuZB6bSL0AI1+BVnZ4Q9u2q27gusAJBmT1jMoze2/vVNxCyFIvBQIGUmIiTz5b106htIM9Mj0VVGr2g4eKRz05QfTfwUvh2IbMfMgB4ERtp151G4hwo2wz4edP+pbB3TmV691+1enW5iUZLOXPlMMTAXozHWFB129pq+4fg8qr5t8u4EFktFVnnEsTVdCtLP9kD06xJ8LKLq3ZPgZ6iJGevx5haTxLjE2wLRJJgNBkhRvAI0Peq7gF1hfYpavXEZRJUMSDoT6lEbz+Fb1xDhy238zKMrb5Yg99u8EHaRVXft3c6tauNbSSWjLqDto2vzFSZWbRdwRbMHw5DwH2NNLEtNOGtF9z6aXyUPjV9vJZFs3JYIktayKFB0zZRqerV54Z4VtAfQGjmw5e1T+LXLossS7EDcGNQNToORAOtS8BxCF051TicYezDWEgTf3A8ydbqD3uc0OYBbbnE+MADT1VPxLwzZywLYQ8igA/Lf5pw/hzm3lcrbQK0ENGw5AjU9hPvVnxDiGhLtooqDhcR5iK3UaTyHSqqFYhpc4FwGU7x+sl6O0LA3ijp8aC+qYWyyKArbbTXu5w1kU4hXzrIB0gqeke5/GpCruNyOnTrUfGAhSdYEEjrHb2JqNKuAXB4mfQ6R457qzvFwgx8jYqX4ZxjHFm2VIzWbgVjH1mIA7wGHzV1h8k/vAY7b/AI1rGEAxVkPh74W+jZhm5EGY01EjSfmr5eKf/wBOHZXAOZrcQY5kHb8JqyrhakMIAkHI3BmMx189TYBYMRBeSP6iNv15XtOwNpWfIRKOGVgeasCDPxWoYfgoVIDMQukmIJ5DT6QfmrfiGJv38MwwNsp5in95caHynkqgQsjmTOvKofCXu3GFq5bZLkDMCQAY59/cTVdKadPhDgSHEkCLWAEg6WuoUK3A5xmJA9J9br2nEbwH/XcFdMoYgADSAoMQNorovAsU13D23f6mXX3BifmJ+a0vE+FGkuLpMnMVgc9wDW78IuhrKQAsDKVHIjSK7v4wv7Rwc6bazvnf4WP8nUo1KTTTAz2Ai2XMHPwU+lKV2lxUrBibwRGdtlBY+wEn8qz1hv2g6lWEhgQR2Ohoi59xXjtzEKwNtRbBBXeQeRzTvr0qoRkMs2V8oj1DaYnSdx1q34n4bv2swtlXQAkS0GB1H6isK2Us2w5PqHqJj7/hXyWJNem8HEWM2IidjFxa+Xtcr6uk7D8HDRgjYc97feaqLmFQ2sy2URic2UCNRsQDrJiRJ5714wmPPpRlYORtB3G423Her8rAYMhzHZtdJ1msNvBOpuXVUbLuYkKNdIO23Lb2rM+oHSX5mTexmcrjO+llMVWtF/v6VXcFxmCi22X+JtBA9pkmrf8A4ZaZMuQAATMb/PWsGHxdxSA6LDag5tR2iNfilu08wtwZABJO8nkANyfis4a+qQxmcE2O2ZJnQdOS9qOcczG33qq61YZAwzGFJ9TbZd47ke9babeRUQR6VU+7MAST7n8AKpv2PKpzEspJkGPpPaO351aWXV1RAw8xVAykwXC6ArP1GIBG/PnWh8VKZ7Igm0wNs/XvbGDBlU4h3EGk5An70zHKVnu2ipE6bHQ/5rVXxl5xNtJH/MWiwB2NxDlb5YEEDmQ3MirTyiqlrn7tRuz6Afff4qqxqpiLyuAYtiLYO8dT0nUnnqK04KmC8ggtad88ugke5NuWYcf8mXjy6fPKJKs8Nw63asgWbaJ5hJfKoE5IUbD306msmJsjKGBAMwVqPwriqv5lq6Y8s5hdj0AncE8p3/Gp96xzLWlX+bOsff8AtU8RRcSXEEyBHLn7mTAgwbzFP8H8ORk/fKBa9slDKhrJU7Zl3/3SpHzv8VQXLv7oek5spHdprZL1xAskxbWWzHTM0QIB1gCQJ3mte8O4Ly0uIxG556wQCADyOv3rPiGdlh2udcgx589IA8RstdGpE21n4UDhKvdY231CyDCmNNJLTGp0jffpVrxfh48sFRGUR6YBj35xVjwvALhrYVDmB6xP4AVkxdwMDoK5z8W4GGGG2tlPXT+lGlVfxhxv657eG0DkFS4OwtmC0tm0kmTP96h3R+8YZcoOq9+v+d6927LaN5k5CYBAg7jX4rLhsOt4M1xspQmMrc++nfapucBLnGd/tl0W/wCs8RM6HPwssOP4wlvy8xysfQNN50iAOnM9arW4o926VYfUY6kcpbp7Vl4pg8pGdSzSsZFLRM6t/LyrHiXCXMzWwocyTMeonQnoda6YpCSKh722/K2sX+LrMa0VIp5RnBt4nPkpnD+FW7GYIgDTJadYkadY3rY8Fc/eEMdJgDsRP+e1VWHxAJbVV0A2mTrG/fT7V6uYsanTTL9R157Hl/bavKgdUDmvM8W+tzptaTYdFW4AthbDl8nUfR06f2rLi8Kt1ZGjDVSNwev9qxcLvC9ZkwdIPT/1WPhN0hntEyUMA9RuD9iAe4NcxjeGxyPoftj5arC6bnUKRwbHls1u5pcTQ9xyYdjVxgDlcr/Nr8j+35VrvEF8vE2rg2Ym23eRmX7EN/8Aqrl3gq3Qg108JiDSeL5EeRsf14KmqziFtfdXtKUr65cxKjY69ktu/wDKrN9hNSaw37QZSrCQwII6g6GvDMWXoiROS5zduShdnl21J56zzqXbwgJUq2ZQBuAJP9K+8T8Om26gXJQn6SNYHfaNqz4xsiBV+piFHbqfgSfivg8U2rhiabgOIkGZkjO4OhdYnWwyX0jq7HgGmd/+eGi8Lhg1wknMBB9XqgjcgnUew5iffLiALs2Y9JEN7dPmvd1hatDvsOfYVXeHuIetg4hsx+3L8Koe+o8BznExFzeBNvLPyWeLEgdP7Vs+DsyEbLm7xVTxXg/lstxCFAPqnXQiN+WsVMxPAg+JGINzQfwzWTxHfU2WWZlSKk0MY9sXmLXve4zk2/8AQUaNeoHQCvFj1I2dhI0jnGmx+apbODGUsrBihYDNz9unxXzA4W4thc7sYEEBmgdRodazXMRb8mLYk5TGXnPtUi+D3Dlr8rfTBbMany6qLcuO1s/u50mAeY1G+m4rLYvGbesK31DqYkfr9qm8HZr6xlyhdDIgk1aX+E4dQA5VcvqEmIgamZ6Grn4xxLmQeUaTpc3+bqNTEsYeF2fJVPGLnl2/Q3oGpEbTpNQL9tii3X8xMu8ZlkfG46f3rYcFgiMRDQyBMyf90ga+0z8jpVszT3nf+9asKHvoS47xyGWt7Kj/AChThoE88s/DzWpX8ZbK5fqJgCSzET/3HSsOItEXbjWyxJyjLyMAbHkf6VZ8SxyWWu5f+on0gHXUBssfNYbvEAgUKm8KNOZ9vzrMXljSwiXEkGcrbZHXlHirmPMS0W5ndQ7XEmBKMjSOUVOwNlrinMcsmACYIFWWCwwBzfxHc184jg2OqmDz9vjnWMVMMWWB4rbcPODmOvsqnVpfAstfTheW4oDfu+YOp079K2LD4cNHpGkR2qiwl0m4wY7aVfWrkCq8T2jHw/Mbf2NVLEPc4CCq7inAjq6uysxkneetYMNwb9ot/wDNTAJCqjEEgc8w1AmYAg6cqncQxsDU1g8NcYW/aAzZXVmEHmMxIInfQwehBroYJ76jnPMmIubmd5ETveVQS9lPPP2+PdYOK8BS1ZdrBuQgLMhbMSq66Ftcw31PLrVNwf8A5nO5HoaV9Y5aDcHqDW54pGe3cWfUysug2zAie0TNarawjYVFtudP5uRP6HXbvWiriQ3us/nPQ9Yyn123VuGJfLXHpK2HwrYFu2bYkhdBPT/BXy2IxrR/In53KlcHw5S3LaFtfYV9wFjNde5yMKPZf7k1kaxzmtBzJn1H79lneW8byMlh4+J8rr5ifn/SanYg6AVX464HxFtB/BLn7FV+8sf/ABqzs2811F7yfYa/nFTa3tK3A3UgevwoHutBOklbBX2lK+6Oa5CUpSvEWt8YacSq9En7k/0FU2K1xSDkEY/JKr+RNXPGVy4lW5MsfIP9xVVjky4hH5FWX50Yfgpr4X8tP+XUnf04f6ldjDfwb0X3xFhSyBkjONFBMAk9+XvVcvhxwfMW6c0Rlj0n9Z71d8T+gMNlMn2NZ8FjVKRoay1XuY6AYG8TMxZT43CmIutQv4++pyRqDBBP+aV9wti418Le1XKSRvJ0Gv3NfOPX4xDNE249RHLaPbUE/NfOHK5uC4oYiCMpJ1Bg/fStBYDTBa0NJb63yKkKjGguJVxisE+U5WjQ5ef4dahDEW7NoZQIA0716xGOuK6gwtqfVoS3wdo29u9V+HsrccNYVBaTRQwD5o5mZ/So0MKCziqvAEjSSfC2WnivRih/HP081c+E+ISoZlIkkiRuJOo6jvVlxHhVu9dS6W+nWCdOXLntVXisK8l1jNG+w7DTYDb2rBg7mIdJaEnaJY/pFRqCHO7L+MnOxEiPUbTHVZ6h4jxOzUrjfEXW9Z8lhnBMg7MkQQe05fwrPi/EGRQDZKltMxYFVPXYE6+29UPEcDkfzhOcLG8jfnMQPaqrH8fuNCG0QqsMxmfsOY01rZTbVYA2m4OBmeRzNnQR0hTBomnfMdfBWOPx4clcxJYyWIG/WpPCpe9DMGCKCI67c6qOIX7bDQmY1jWe0DlUjhWJW1fH7p1V1ALlTEjYExpud6rq0waZjMz+1WMQ6zSVvWFGqipOKWqv9oywZrHi+JqolmrkiCwtAkleubeVQ8dxptXbgW2ToHkRGvflt+NP/lNkJJJB6QZmo1q/dvu5AhGMCd4Gm3xPzWbFcBfLJJYcwenTtrrXTbQplobVmWjT2Of6v1UBieEkBVTcc8y4Q4yp8a8412qVwZwHL5R5YJ/pt2/WpGCwquWt2reaACwUCQSdM3USNJ71IwXCgLgVrksWJZSNNNwYPXvrrWssZ2bmts2L+gnn4ei87VzncS2Kxxa1lGUiO0VBx+NR4JKhQwMnmQZgAbnSomJ8OIrJcW3neQMo0WNYmdhJ3qK/DJuTcPrEjKD6VHQRt7T+M1i/w2U4dxGBOYj2nPzU3PDbtF1cXOPLdBFqQNi5ER7A7sPt+VYb/FzlFtBlA0JJ1iP7a18s4FVUfwquwAj2EVR+IMctsMeXxr0HyasDXvdae9bnHh8Qqu34CIGSvL2MS1laSOs/16noK2zg1ggeY4hmGgO4Xv0J6e1cb4BiUuXLdtbLl91nXWDMCTHX712Xw/hXt2QtzcknLM5QeU/j811fxeB7KvxOabA3yHle5HO3qmIxDalMFp+T/wAVrSlK+kXPSlKURVvGMF5iafUuq+/T5qheLqZTow/AitwrX/E9i0tprrqc2gGUlZJMCSvLWuP+U/GjEf7WmHAXmYIF9LyNFqoYjgEFVOC4qkNbu+kr6TOxHvzHetXxGJW0bmVmC+orB67b8gZj46VmuXnQjyyGcyFUsTtzk5myzG81VcVw15rcXLYBZgS4ykjsOQO8DSuNSo/xaSNotfzv0tvBN5sNfiuLLLbUlkJfMHPqBOvpHMdJH4mr/jQcWUFj0nedde0gVpN61kt27ousGDAkGY17f0q3w3jTKomRBEyNPvVxYSJaJ8NuXwIVLs7rY7zH9mU3QM8c61Dw5ae3fvOmcoDJQEZSSJ5nQg9K+eIPFDFQ2R4b6TBAPyeWtZfDeJAU27zKGds1tmjKSdlYHQ+3PbcVOnSLJLxAIi+fXqvA+CFdHjLOFUhlltYYERvBKnnp96usZirlq2jW1BB7fhWr+MeItbVrhC+Y7LlRDpAABPYQD8kCpXAfG1p0CsQSBs24+KrqMDTxtnh5X9lM1C4wVe4m/wCbYDMmXTnWpYDEG4HtqFHlMRJjWPx2qfxvxQGQi2CSdo68qpzZaUtORbcqWZkbfr33M7c6qbTc65GykX2Vz4d4ULjMxAltewHQVbWcRad/KVDzEzue4+9a74Y4wts5C30ek/H9a2dMZZVjcUSfymqHgcR4xP8AXLw2jNVyStV8T27tp0trcK22aP8AtO+hjQaGvVm4q2GzepvXNyZJMmNCJyxA/SvfHcb5rqMhcOxgZSRIHUc9ZqFh+FNbVvOtkJBgr87j53rXQq9kBkCd4kifuWa9BJC2TwzdUIJ5DSsnBrV9bt0vomu/TvNabguIXLJAysZErA3HWpieKLl5vLtK7GYgAwKiKVVk92Rv91/e6rmM1d4WwFxDXkutbYrkaIjLvsQZMz7VKsh7HmOiG5zBckNqOhWqfgmLW3du275iXW4rbxoInpGUa7fhV9e4gtxmFtzcuNAYgaAjuBExy32qyqBwhrtOGIFiN553NyDIjSFY0xcLLfxjtlRCQx+rt+mv6GsxRLKjQM0bcqj3HTDqTIz8yTt7mtU4jxlrklTCzq7bE9h8VRwF7z2Yk8//ACOekx5dV6+purLjHGwgJZtt+grSf2h8TczMCLY+kHn/ALj8bCs37O15hMlZ/wD0f0FS8QsEWbQzO0AAa6/Heung8IGGczv/AF/azOfxGArz/TfAG5xAOB6LKszH/cwygfYz/wCJrsdUHg7gIweGCGDcb1XD1Y8vYbfc86v67rBAXiUpSpIlKUoiVGx2EW6jI/0sINSaV4RKLnXE+BNhmZlYuXEJptl5ak66z/6rDi1tsr5QRba3Bzk6vqOZ0ExXRMVhVuLlYSK1HxV4VLWHa3ccsgLKkiCV15DXauLiPxry9xZHCYOsiALDrG6ta8ALmvH8MtkpkcXQFljodQYIgbaa69TXjhHDTiHchVGhYjYAaba1Ixdlb2W4unnWzabs8Sv32+1VfCMYyMVOjD0N7jT7GoVCC3iiOQ+PH3VJdOasuPcBayuXQZ1nTbX9QY17VE4K3n4Yo31W/wAvykH8qtMdjGdQGP07RVT4VaMRdUc5jXmddfx2phqgeS28aKMqVZxK3r7PfAEAKFG0rpy7hj/5VL4DgMM+OaFEi2xVeuqie+/41r1+wfPuIhIYsmWAYEnKew5bwK6DbxFmzZAyhco+oaGY77zt11pi+0bfV05Z+P26sGclSv8Ah6MqArbh1zALoyHuI0M8+1ayLCrcf9pdWgEDKYy+5iAY5TyNWPFcReFtFtIqm4YZgTKk66hoA6zrroNaxcR4ULFhrqXPXbViFYKw0En0kQDvHfrWVpY68QDbeIMG3jCtL4yWq4HhwutcdSyIoYz21P4gbdxV7wTKbSlizkiYZ4B6aJBjbnVdcOTDLZDQ15hPsfx0UCrXBgFQo9JXT/I5f3roNpiZInrCpkqZhnNtvRGhY5ZMDMZOUH6duVS8X4jteWwYZYBBkERp/uNR0jrrpVN4l4UDlxEZskllH8Q+BJYdKzYjBsrv4nZ/YXoeQs1zFDE2ba25WIlgCvp5gkgaaRWG9xK3hlyWQMx0EbnSIBjbeTO1WuH4HevWM2YW9NFCzEdTmGvtVBwfhUM128fpkGeQUwY7aVFrWnutJI+5cuea8cSTJUq1c8iw1656rlwgR1J/SB9o504JxxrWYZSxP8u4JAnU7AxyqFec4u55ryuHtbQNT1IHNmiBvvPKsPC+N24Zzl9RLR77V6+hLSAM/C+mW2QUQ4g2UniF+9fbWQnJR+p/z3rPb4ccoNxoVeuw9hUW5x1m0tgf+I/U17/Yr1wgXM2uygGT7dT2Ensa00sKA0A5crD9oZdcr1cx26WFkndu36Cuif6f+EvJ/wCYvibrfSD/AAjrHU/hXrwb4QFoC5dQKdCqHUyNix/HL8noN5rp0qcKQCUpSrkSlKURKUpREpSlESvhFfaURcj8W8IOFxB0PkXTKkH6GmY7QdRH6VqfGcJmuBgct47g6Ld6EHYP2Ma7bwO88Y4amItNauCQw+QeRHQiuS8c4Hew4Nm/Ze7a/wDruoCSu/QSDqPtWCvh4JLcvvv9uvCFrlrEGCrAhhoQdCD0jrUDh2MCXbhMHXnqNv5edT0wLvbBvBzkJBZfqyiQARqentB2q7tcBRlFy7BZRpmOw6Rz+RWRtNtBpe43yAFzvPSF5EKq4BjkLXbjwVDAwI1Pxy2+9Zr+IFy/bui2zW1cFlBYlpk5spJML9U9YqOfMuXjbW4yKdFykADTYj+aQTGkj71E4ngmQ+Xcu3mzDQzox6RO0QPiedbBhKtQB4iHDc7dBCl0Wx4zEm/dtiwWWGDq5UMAV55SfUddAYjfeIrOLlmxAtNcY6qTyBB3J6a8ttDTDXnserygqtlACExPWDyMjaomPVzeDAyzenKNMpB09Xcmp/4JpOLabO6BY2J08ZTisvvGrufEWwgOW3JnaND+pA71aYO5opUzETAk/aqbBcLvXHuWtrjQxKsCEUbEjro0davsZwi7h1zrD6eoRlJ9tYqNQNpQ0nvHPlJXili+usmCJGo1qPi8QMqq2YK0LJEHUTqDrGlV2J442UDy3BI0nLBGnPUgfFY8PebEXrfmiLSkmRsW2iTuYn8arq03U2l7hkphhiVlw3jW6qm3KAJK5hOsaaL15b0wmKS7K3piSyWgCczHXMwnaeWgH4D34qSxnTyrYEQCyqMyzpM7bxE96oxaGGHnqzZs+V1IJYbwT0WKrpYbjomtREA+sbcvdQN1vNvgly8QxGWB6UTQCO43P/raqPiHhlATK5W1n3/rWTCeI7rqCjEwIGU/0r2i4m+49Dkmdwa57W1gbcXFPh5JGyiYHg3/ANS2w7XHULqDHsWPMjbTeu28F4RasW1yWbdt8ozZAPqjXXcia03w34Ku+Zbu4hsoQhgg3JGomNAJ710au9hzVLB2oE/C9SlKVeiUpSiJSlKIlKUoiUpSiJSlKIlfIr7SiLVfFHhT9oPmWmCXIg9GHeNj3rnXiDh+JsFbTsheNWlj6STBOmp3ETsBXb61rxN4TTFsHLlHAidwR3E7iTr3qIpUnOmoJCSYgLjKYBPOQec4/iZon1L0XnOm+lT8Zh7hTMXVvTpIyxE67nt7RV3xXwVewjPeWLiaAFZkDXdY/GTWs8Q4hCAa85kjcnYAdorWH37tgr2saWS66x3LwvW1V8zAMOcFdQNeQ0A17V7v4z0m21vIqwDodIO/Vdt99a88LxDWxLEZXkHNpAOv5mJ9qnYK9aQ5VZgWEAkSMo09J6AwPt3qZqObBi2S9GGa9waSeI5jbbRQ+Fs4zPbYeYC0Ts24MNMg6R7H5rJh+PXrpZCoGXQsxED7EzWLiNlVuDybh1nNzk9fes2P4faUI9ot6gPMWdcwGpEnQk69OVVVaNCqWucL5ffvWF4cLVaXCJA9VU+VZV0Nx8+U5cq6ShkzpvrHYfhVzZTzbH7u7oDmCGMsgyBK89B+Na3hOIoBeAthnYuAW1idBHca6+1bZwbCJYsq10g6EaDlrtOxE894ryqSJ4Vdh6PE2SJt9hRuNcPuJbTO1tFY+ry1g6zuw0gdY/KsZ4eXHmWWuIwBGdJPm92BP06THfsBVnfsm+ttkuZmmFtONADsNP4hPPepvDPBHELkJcbyrY5zOh6AUY9pb3/v3koYnD9m4WgR95qq8P8AhG9inQthLXpcZrykoYBkghCA07bSJrsXCeB2bJzLYto8BZXUx/3kAkbadqkcF4WmGsrZtzCjc6knmSepqwqmwNlllKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESvlfaUReSs71oPjLwAMRcN+0wVsuqZRDFZIg8pMTXQKV6DC9BgyvzvZtZ7q2LoYKCQynQ+kGR2mI+9XOIwdp7tsKkldEA0XcTOu0GPn7dgxPCLFxsz2kZupUT960Xxd4TNtxfwysRBDASY2Og6acq9c6V0aeKY88LxmudcUUWcQdDqJiZygHX2H9K+YzjiESYECpaDPiCmICrIgeYOu5II+B7VA8TcFUG2LEM7jMVXkJ5/kDVgB4eLJauA8BdxQPjrl4Ksw+EV2LRdUMZ0XfrrPp59a3fD8Mu38tvDsHI1gj+HoT7iq3gC4u9dTDmwQRAk2yBEQSWGkACu5cP4VZsCLVtU6lQBPvVZcdFmq1adG1O885VB4P8ACwsL5l+2hvkkyNco5CevetupSornve57uJyUpSiglKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiLSfGfgC3jXF1XNq6BExIYdx171h8Kf6dphW8x7zXLk6nSCIIywZMazvyHSt8pRWds/h4JMLGlsDYAVkpSirSlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlEX//Z",
    },
  ];

  return (
    <div className="w-[20%] border-solid border-gray-500 my-11 border">
      <div>
        <div className="bg-gray-800 text-white py-5 flex justify-center">
          <h1 className="text-2xl">עגלת קניות</h1>
        </div>
        <div>{cart.map((store,i)=><CartStores key={i} store={store}/>)}</div>
      </div>
      <div className="border py-5 px-2 ">
        <p className="flex justify-between items-end flex-row-reverse">
          <span >:סה"כ</span>
          <span className="text-end">0 ש"ח</span>
        </p>
         <p className="flex justify-between items-end flex-row-reverse">
          <span>:בקניה חסכת</span>
          <span>0 ש"ח</span>
        </p>
         <p className="flex justify-between items-end flex-row-reverse">
          <span>:מספר מוצרים </span>
          <span>0 ש"ח</span>
        </p>
      </div>
      <div className="">
        <button className="bg-teal-400 w-full h-full rounded-none text-white text-4xl p-4 " > לתשלום 0 ש"ח</button>
      </div>
    </div>
  );
};

export default Cart;
