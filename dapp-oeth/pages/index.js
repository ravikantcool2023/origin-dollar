import React from 'react'
import Layout from 'components/layout'
import Nav from 'components/Nav'

import BalanceHeader from 'components/buySell/BalanceHeader'
import MissionControl from 'components/MissionControl'

export default function DApp({ locale, onLocale }) {
  return (
    <>
      <Layout
        locale={locale}
        onLocale={onLocale}
        nav={<Nav page={'swap'} locale={locale} onLocale={onLocale} />}
      >
        <div className="home d-flex flex-column">
          <BalanceHeader />
          <div className="d-flex">
            <MissionControl />
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .home {
          padding-top: 20px;
        }

        @media (max-width: 799px) {
          .home {
            padding: 0;
          }
        }
      `}</style>
    </>
  )
}
